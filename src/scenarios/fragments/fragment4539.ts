import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken4537 } from "./fragment4537";
import type { FragmentToken4538 } from "./fragment4538";

export const FRAGMENT_4539 = gql(`
  fragment Fragment4539 on Member58 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_58
    memberCount_58
    memberMetric_58
  }
`);

type FragmentResult4539 = ResultOf<typeof FRAGMENT_4539>;
type FragmentSelf4539 = NonNullable<FragmentResult4539>;

export type FragmentToken4539 =
  | FragmentSelf4539["__typename"]
  | FragmentSelf4539["typenameHint"] | FragmentToken4537 | FragmentToken4538;
