import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3898 } from "./fragment3898";
import type { FragmentToken3899 } from "./fragment3899";

export const FRAGMENT_3900 = gql(`
  fragment Fragment3900 on Member259 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_259
    memberCount_259
    memberMetric_259
  }
`);

type FragmentResult3900 = ResultOf<typeof FRAGMENT_3900>;
type FragmentSelf3900 = NonNullable<FragmentResult3900>;

export type FragmentToken3900 =
  | FragmentSelf3900["__typename"]
  | FragmentSelf3900["typenameHint"] | FragmentToken3898 | FragmentToken3899;
