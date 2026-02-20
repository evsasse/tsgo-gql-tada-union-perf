import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3981 } from "./fragment3981";
import type { FragmentToken3982 } from "./fragment3982";

export const FRAGMENT_3983 = gql(`
  fragment Fragment3983 on Member62 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_62
    memberCount_62
    memberMetric_62
  }
`);

type FragmentResult3983 = ResultOf<typeof FRAGMENT_3983>;
type FragmentSelf3983 = NonNullable<FragmentResult3983>;

export type FragmentToken3983 =
  | FragmentSelf3983["__typename"]
  | FragmentSelf3983["typenameHint"] | FragmentToken3981 | FragmentToken3982;
