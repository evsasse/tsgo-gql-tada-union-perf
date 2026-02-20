import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3993 } from "./fragment3993";
import type { FragmentToken3994 } from "./fragment3994";

export const FRAGMENT_3995 = gql(`
  fragment Fragment3995 on Member74 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_74
    memberCount_74
    memberMetric_74
  }
`);

type FragmentResult3995 = ResultOf<typeof FRAGMENT_3995>;
type FragmentSelf3995 = NonNullable<FragmentResult3995>;

export type FragmentToken3995 =
  | FragmentSelf3995["__typename"]
  | FragmentSelf3995["typenameHint"] | FragmentToken3993 | FragmentToken3994;
