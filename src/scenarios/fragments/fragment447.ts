import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken445 } from "./fragment445";
import type { FragmentToken446 } from "./fragment446";

export const FRAGMENT_447 = gql(`
  fragment Fragment447 on Member166 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_166
    memberCount_166
    memberMetric_166
  }
`);

type FragmentResult447 = ResultOf<typeof FRAGMENT_447>;
type FragmentSelf447 = NonNullable<FragmentResult447>;

export type FragmentToken447 =
  | FragmentSelf447["__typename"]
  | FragmentSelf447["typenameHint"] | FragmentToken445 | FragmentToken446;
