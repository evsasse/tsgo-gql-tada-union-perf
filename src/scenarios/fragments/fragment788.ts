import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken786 } from "./fragment786";
import type { FragmentToken787 } from "./fragment787";

export const FRAGMENT_788 = gql(`
  fragment Fragment788 on Member227 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_227
    memberCount_227
    memberMetric_227
  }
`);

type FragmentResult788 = ResultOf<typeof FRAGMENT_788>;
type FragmentSelf788 = NonNullable<FragmentResult788>;

export type FragmentToken788 =
  | FragmentSelf788["__typename"]
  | FragmentSelf788["typenameHint"] | FragmentToken786 | FragmentToken787;
