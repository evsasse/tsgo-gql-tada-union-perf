import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3721 } from "./fragment3721";
import type { FragmentToken3722 } from "./fragment3722";

export const FRAGMENT_3723 = gql(`
  fragment Fragment3723 on Member82 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_82
    memberCount_82
    memberMetric_82
  }
`);

type FragmentResult3723 = ResultOf<typeof FRAGMENT_3723>;
type FragmentSelf3723 = NonNullable<FragmentResult3723>;

export type FragmentToken3723 =
  | FragmentSelf3723["__typename"]
  | FragmentSelf3723["typenameHint"] | FragmentToken3721 | FragmentToken3722;
