import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3030 } from "./fragment3030";
import type { FragmentToken3031 } from "./fragment3031";

export const FRAGMENT_3032 = gql(`
  fragment Fragment3032 on Member231 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_231
    memberCount_231
    memberMetric_231
  }
`);

type FragmentResult3032 = ResultOf<typeof FRAGMENT_3032>;
type FragmentSelf3032 = NonNullable<FragmentResult3032>;

export type FragmentToken3032 =
  | FragmentSelf3032["__typename"]
  | FragmentSelf3032["typenameHint"] | FragmentToken3030 | FragmentToken3031;
