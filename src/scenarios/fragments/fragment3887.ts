import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3885 } from "./fragment3885";
import type { FragmentToken3886 } from "./fragment3886";

export const FRAGMENT_3887 = gql(`
  fragment Fragment3887 on Member246 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_246
    memberCount_246
    memberMetric_246
  }
`);

type FragmentResult3887 = ResultOf<typeof FRAGMENT_3887>;
type FragmentSelf3887 = NonNullable<FragmentResult3887>;

export type FragmentToken3887 =
  | FragmentSelf3887["__typename"]
  | FragmentSelf3887["typenameHint"] | FragmentToken3885 | FragmentToken3886;
