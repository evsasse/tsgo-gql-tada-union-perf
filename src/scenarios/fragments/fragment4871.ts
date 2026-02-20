import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4869 } from "./fragment4869";
import type { FragmentToken4870 } from "./fragment4870";

export const FRAGMENT_4871 = gql(`
  fragment Fragment4871 on Member110 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_110
    memberCount_110
    memberMetric_110
  }
`);

type FragmentResult4871 = ResultOf<typeof FRAGMENT_4871>;
type FragmentSelf4871 = NonNullable<FragmentResult4871>;

export type FragmentToken4871 =
  | FragmentSelf4871["__typename"]
  | FragmentSelf4871["typenameHint"] | FragmentToken4869 | FragmentToken4870;
