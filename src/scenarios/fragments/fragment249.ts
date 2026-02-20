import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken247 } from "./fragment247";
import type { FragmentToken248 } from "./fragment248";

export const FRAGMENT_249 = gql(`
  fragment Fragment249 on Member248 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_248
    memberCount_248
    memberMetric_248
  }
`);

type FragmentResult249 = ResultOf<typeof FRAGMENT_249>;
type FragmentSelf249 = NonNullable<FragmentResult249>;

export type FragmentToken249 =
  | FragmentSelf249["__typename"]
  | FragmentSelf249["typenameHint"] | FragmentToken247 | FragmentToken248;
