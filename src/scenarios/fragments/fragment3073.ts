import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3071 } from "./fragment3071";
import type { FragmentToken3072 } from "./fragment3072";

export const FRAGMENT_3073 = gql(`
  fragment Fragment3073 on Member272 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_272
    memberCount_272
    memberMetric_272
  }
`);

type FragmentResult3073 = ResultOf<typeof FRAGMENT_3073>;
type FragmentSelf3073 = NonNullable<FragmentResult3073>;

export type FragmentToken3073 =
  | FragmentSelf3073["__typename"]
  | FragmentSelf3073["typenameHint"] | FragmentToken3071 | FragmentToken3072;
