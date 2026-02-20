import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken279 } from "./fragment279";
import type { FragmentToken280 } from "./fragment280";

export const FRAGMENT_281 = gql(`
  fragment Fragment281 on Member00 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_00
    memberCount_00
    memberMetric_00
  }
`);

type FragmentResult281 = ResultOf<typeof FRAGMENT_281>;
type FragmentSelf281 = NonNullable<FragmentResult281>;

export type FragmentToken281 =
  | FragmentSelf281["__typename"]
  | FragmentSelf281["typenameHint"] | FragmentToken279 | FragmentToken280;
