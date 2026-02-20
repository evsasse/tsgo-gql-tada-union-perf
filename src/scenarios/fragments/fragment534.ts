import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken532 } from "./fragment532";
import type { FragmentToken533 } from "./fragment533";

export const FRAGMENT_534 = gql(`
  fragment Fragment534 on Member253 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_253
    memberCount_253
    memberMetric_253
  }
`);

type FragmentResult534 = ResultOf<typeof FRAGMENT_534>;
type FragmentSelf534 = NonNullable<FragmentResult534>;

export type FragmentToken534 =
  | FragmentSelf534["__typename"]
  | FragmentSelf534["typenameHint"] | FragmentToken532 | FragmentToken533;
