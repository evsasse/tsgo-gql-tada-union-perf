import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3262 } from "./fragment3262";
import type { FragmentToken3263 } from "./fragment3263";

export const FRAGMENT_3264 = gql(`
  fragment Fragment3264 on Member183 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_183
    memberCount_183
    memberMetric_183
  }
`);

type FragmentResult3264 = ResultOf<typeof FRAGMENT_3264>;
type FragmentSelf3264 = NonNullable<FragmentResult3264>;

export type FragmentToken3264 =
  | FragmentSelf3264["__typename"]
  | FragmentSelf3264["typenameHint"] | FragmentToken3262 | FragmentToken3263;
