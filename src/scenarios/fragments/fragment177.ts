import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken175 } from "./fragment175";
import type { FragmentToken176 } from "./fragment176";

export const FRAGMENT_177 = gql(`
  fragment Fragment177 on Member176 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_176
    memberCount_176
    memberMetric_176
  }
`);

type FragmentResult177 = ResultOf<typeof FRAGMENT_177>;
type FragmentSelf177 = NonNullable<FragmentResult177>;

export type FragmentToken177 =
  | FragmentSelf177["__typename"]
  | FragmentSelf177["typenameHint"] | FragmentToken175 | FragmentToken176;
