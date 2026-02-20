import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2987 } from "./fragment2987";
import type { FragmentToken2988 } from "./fragment2988";

export const FRAGMENT_2989 = gql(`
  fragment Fragment2989 on Member188 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_188
    memberCount_188
    memberMetric_188
  }
`);

type FragmentResult2989 = ResultOf<typeof FRAGMENT_2989>;
type FragmentSelf2989 = NonNullable<FragmentResult2989>;

export type FragmentToken2989 =
  | FragmentSelf2989["__typename"]
  | FragmentSelf2989["typenameHint"] | FragmentToken2987 | FragmentToken2988;
