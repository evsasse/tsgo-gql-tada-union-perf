import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3304 } from "./fragment3304";
import type { FragmentToken3305 } from "./fragment3305";

export const FRAGMENT_3306 = gql(`
  fragment Fragment3306 on Member225 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_225
    memberCount_225
    memberMetric_225
  }
`);

type FragmentResult3306 = ResultOf<typeof FRAGMENT_3306>;
type FragmentSelf3306 = NonNullable<FragmentResult3306>;

export type FragmentToken3306 =
  | FragmentSelf3306["__typename"]
  | FragmentSelf3306["typenameHint"] | FragmentToken3304 | FragmentToken3305;
