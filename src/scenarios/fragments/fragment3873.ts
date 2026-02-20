import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3871 } from "./fragment3871";
import type { FragmentToken3872 } from "./fragment3872";

export const FRAGMENT_3873 = gql(`
  fragment Fragment3873 on Member232 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_232
    memberCount_232
    memberMetric_232
  }
`);

type FragmentResult3873 = ResultOf<typeof FRAGMENT_3873>;
type FragmentSelf3873 = NonNullable<FragmentResult3873>;

export type FragmentToken3873 =
  | FragmentSelf3873["__typename"]
  | FragmentSelf3873["typenameHint"] | FragmentToken3871 | FragmentToken3872;
