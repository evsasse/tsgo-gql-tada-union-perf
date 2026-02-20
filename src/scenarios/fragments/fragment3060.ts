import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3058 } from "./fragment3058";
import type { FragmentToken3059 } from "./fragment3059";

export const FRAGMENT_3060 = gql(`
  fragment Fragment3060 on Member259 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_259
    memberCount_259
    memberMetric_259
  }
`);

type FragmentResult3060 = ResultOf<typeof FRAGMENT_3060>;
type FragmentSelf3060 = NonNullable<FragmentResult3060>;

export type FragmentToken3060 =
  | FragmentSelf3060["__typename"]
  | FragmentSelf3060["typenameHint"] | FragmentToken3058 | FragmentToken3059;
