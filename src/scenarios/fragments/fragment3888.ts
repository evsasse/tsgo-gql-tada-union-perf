import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3886 } from "./fragment3886";
import type { FragmentToken3887 } from "./fragment3887";

export const FRAGMENT_3888 = gql(`
  fragment Fragment3888 on Member247 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_247
    memberCount_247
    memberMetric_247
  }
`);

type FragmentResult3888 = ResultOf<typeof FRAGMENT_3888>;
type FragmentSelf3888 = NonNullable<FragmentResult3888>;

export type FragmentToken3888 =
  | FragmentSelf3888["__typename"]
  | FragmentSelf3888["typenameHint"] | FragmentToken3886 | FragmentToken3887;
