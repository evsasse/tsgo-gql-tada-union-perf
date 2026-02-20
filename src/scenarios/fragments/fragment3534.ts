import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3532 } from "./fragment3532";
import type { FragmentToken3533 } from "./fragment3533";

export const FRAGMENT_3534 = gql(`
  fragment Fragment3534 on Member173 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_173
    memberCount_173
    memberMetric_173
  }
`);

type FragmentResult3534 = ResultOf<typeof FRAGMENT_3534>;
type FragmentSelf3534 = NonNullable<FragmentResult3534>;

export type FragmentToken3534 =
  | FragmentSelf3534["__typename"]
  | FragmentSelf3534["typenameHint"] | FragmentToken3532 | FragmentToken3533;
