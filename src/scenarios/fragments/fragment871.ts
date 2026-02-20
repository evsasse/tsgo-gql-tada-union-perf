import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken869 } from "./fragment869";
import type { FragmentToken870 } from "./fragment870";

export const FRAGMENT_871 = gql(`
  fragment Fragment871 on Member30 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_30
    memberCount_30
    memberMetric_30
  }
`);

type FragmentResult871 = ResultOf<typeof FRAGMENT_871>;
type FragmentSelf871 = NonNullable<FragmentResult871>;

export type FragmentToken871 =
  | FragmentSelf871["__typename"]
  | FragmentSelf871["typenameHint"] | FragmentToken869 | FragmentToken870;
