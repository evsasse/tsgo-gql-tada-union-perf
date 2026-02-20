import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken594 } from "./fragment594";
import type { FragmentToken595 } from "./fragment595";

export const FRAGMENT_596 = gql(`
  fragment Fragment596 on Member35 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_35
    memberCount_35
    memberMetric_35
  }
`);

type FragmentResult596 = ResultOf<typeof FRAGMENT_596>;
type FragmentSelf596 = NonNullable<FragmentResult596>;

export type FragmentToken596 =
  | FragmentSelf596["__typename"]
  | FragmentSelf596["typenameHint"] | FragmentToken594 | FragmentToken595;
