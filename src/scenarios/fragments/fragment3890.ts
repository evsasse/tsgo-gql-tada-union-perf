import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3888 } from "./fragment3888";
import type { FragmentToken3889 } from "./fragment3889";

export const FRAGMENT_3890 = gql(`
  fragment Fragment3890 on Member249 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_249
    memberCount_249
    memberMetric_249
  }
`);

type FragmentResult3890 = ResultOf<typeof FRAGMENT_3890>;
type FragmentSelf3890 = NonNullable<FragmentResult3890>;

export type FragmentToken3890 =
  | FragmentSelf3890["__typename"]
  | FragmentSelf3890["typenameHint"] | FragmentToken3888 | FragmentToken3889;
