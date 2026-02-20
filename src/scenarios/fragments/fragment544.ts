import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken542 } from "./fragment542";
import type { FragmentToken543 } from "./fragment543";

export const FRAGMENT_544 = gql(`
  fragment Fragment544 on Member263 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_263
    memberCount_263
    memberMetric_263
  }
`);

type FragmentResult544 = ResultOf<typeof FRAGMENT_544>;
type FragmentSelf544 = NonNullable<FragmentResult544>;

export type FragmentToken544 =
  | FragmentSelf544["__typename"]
  | FragmentSelf544["typenameHint"] | FragmentToken542 | FragmentToken543;
