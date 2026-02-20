import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3008 } from "./fragment3008";
import type { FragmentToken3009 } from "./fragment3009";

export const FRAGMENT_3010 = gql(`
  fragment Fragment3010 on Member209 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_209
    memberCount_209
    memberMetric_209
  }
`);

type FragmentResult3010 = ResultOf<typeof FRAGMENT_3010>;
type FragmentSelf3010 = NonNullable<FragmentResult3010>;

export type FragmentToken3010 =
  | FragmentSelf3010["__typename"]
  | FragmentSelf3010["typenameHint"] | FragmentToken3008 | FragmentToken3009;
