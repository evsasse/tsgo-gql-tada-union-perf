import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken606 } from "./fragment606";
import type { FragmentToken607 } from "./fragment607";

export const FRAGMENT_608 = gql(`
  fragment Fragment608 on Member47 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_47
    memberCount_47
    memberMetric_47
  }
`);

type FragmentResult608 = ResultOf<typeof FRAGMENT_608>;
type FragmentSelf608 = NonNullable<FragmentResult608>;

export type FragmentToken608 =
  | FragmentSelf608["__typename"]
  | FragmentSelf608["typenameHint"] | FragmentToken606 | FragmentToken607;
