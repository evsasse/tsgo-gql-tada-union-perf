import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4251 } from "./fragment4251";
import type { FragmentToken4252 } from "./fragment4252";

export const FRAGMENT_4253 = gql(`
  fragment Fragment4253 on Member52 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_52
    memberCount_52
    memberMetric_52
  }
`);

type FragmentResult4253 = ResultOf<typeof FRAGMENT_4253>;
type FragmentSelf4253 = NonNullable<FragmentResult4253>;

export type FragmentToken4253 =
  | FragmentSelf4253["__typename"]
  | FragmentSelf4253["typenameHint"] | FragmentToken4251 | FragmentToken4252;
