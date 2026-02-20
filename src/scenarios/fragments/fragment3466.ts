import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3464 } from "./fragment3464";
import type { FragmentToken3465 } from "./fragment3465";

export const FRAGMENT_3466 = gql(`
  fragment Fragment3466 on Member105 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_105
    memberCount_105
    memberMetric_105
  }
`);

type FragmentResult3466 = ResultOf<typeof FRAGMENT_3466>;
type FragmentSelf3466 = NonNullable<FragmentResult3466>;

export type FragmentToken3466 =
  | FragmentSelf3466["__typename"]
  | FragmentSelf3466["typenameHint"] | FragmentToken3464 | FragmentToken3465;
