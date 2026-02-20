import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3884 } from "./fragment3884";
import type { FragmentToken3885 } from "./fragment3885";

export const FRAGMENT_3886 = gql(`
  fragment Fragment3886 on Member245 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_245
    memberCount_245
    memberMetric_245
  }
`);

type FragmentResult3886 = ResultOf<typeof FRAGMENT_3886>;
type FragmentSelf3886 = NonNullable<FragmentResult3886>;

export type FragmentToken3886 =
  | FragmentSelf3886["__typename"]
  | FragmentSelf3886["typenameHint"] | FragmentToken3884 | FragmentToken3885;
