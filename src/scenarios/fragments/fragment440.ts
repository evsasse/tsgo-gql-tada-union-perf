import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken438 } from "./fragment438";
import type { FragmentToken439 } from "./fragment439";

export const FRAGMENT_440 = gql(`
  fragment Fragment440 on Member159 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_159
    memberCount_159
    memberMetric_159
  }
`);

type FragmentResult440 = ResultOf<typeof FRAGMENT_440>;
type FragmentSelf440 = NonNullable<FragmentResult440>;

export type FragmentToken440 =
  | FragmentSelf440["__typename"]
  | FragmentSelf440["typenameHint"] | FragmentToken438 | FragmentToken439;
