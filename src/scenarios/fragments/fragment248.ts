import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken246 } from "./fragment246";
import type { FragmentToken247 } from "./fragment247";

export const FRAGMENT_248 = gql(`
  fragment Fragment248 on Member247 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_247
    memberCount_247
    memberMetric_247
  }
`);

type FragmentResult248 = ResultOf<typeof FRAGMENT_248>;
type FragmentSelf248 = NonNullable<FragmentResult248>;

export type FragmentToken248 =
  | FragmentSelf248["__typename"]
  | FragmentSelf248["typenameHint"] | FragmentToken246 | FragmentToken247;
