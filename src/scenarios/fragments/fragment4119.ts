import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4117 } from "./fragment4117";
import type { FragmentToken4118 } from "./fragment4118";

export const FRAGMENT_4119 = gql(`
  fragment Fragment4119 on Member198 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_198
    memberCount_198
    memberMetric_198
  }
`);

type FragmentResult4119 = ResultOf<typeof FRAGMENT_4119>;
type FragmentSelf4119 = NonNullable<FragmentResult4119>;

export type FragmentToken4119 =
  | FragmentSelf4119["__typename"]
  | FragmentSelf4119["typenameHint"] | FragmentToken4117 | FragmentToken4118;
