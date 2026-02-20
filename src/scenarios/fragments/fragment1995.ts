import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1993 } from "./fragment1993";
import type { FragmentToken1994 } from "./fragment1994";

export const FRAGMENT_1995 = gql(`
  fragment Fragment1995 on Member34 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_34
    memberCount_34
    memberMetric_34
  }
`);

type FragmentResult1995 = ResultOf<typeof FRAGMENT_1995>;
type FragmentSelf1995 = NonNullable<FragmentResult1995>;

export type FragmentToken1995 =
  | FragmentSelf1995["__typename"]
  | FragmentSelf1995["typenameHint"] | FragmentToken1993 | FragmentToken1994;
