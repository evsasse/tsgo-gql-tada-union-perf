import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4116 } from "./fragment4116";
import type { FragmentToken4117 } from "./fragment4117";

export const FRAGMENT_4118 = gql(`
  fragment Fragment4118 on Member197 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_197
    memberCount_197
    memberMetric_197
  }
`);

type FragmentResult4118 = ResultOf<typeof FRAGMENT_4118>;
type FragmentSelf4118 = NonNullable<FragmentResult4118>;

export type FragmentToken4118 =
  | FragmentSelf4118["__typename"]
  | FragmentSelf4118["typenameHint"] | FragmentToken4116 | FragmentToken4117;
