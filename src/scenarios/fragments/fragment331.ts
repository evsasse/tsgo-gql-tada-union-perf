import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken329 } from "./fragment329";
import type { FragmentToken330 } from "./fragment330";

export const FRAGMENT_331 = gql(`
  fragment Fragment331 on Member50 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_50
    memberCount_50
    memberMetric_50
  }
`);

type FragmentResult331 = ResultOf<typeof FRAGMENT_331>;
type FragmentSelf331 = NonNullable<FragmentResult331>;

export type FragmentToken331 =
  | FragmentSelf331["__typename"]
  | FragmentSelf331["typenameHint"] | FragmentToken329 | FragmentToken330;
