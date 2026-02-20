import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3104 } from "./fragment3104";
import type { FragmentToken3105 } from "./fragment3105";

export const FRAGMENT_3106 = gql(`
  fragment Fragment3106 on Member25 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_25
    memberCount_25
    memberMetric_25
  }
`);

type FragmentResult3106 = ResultOf<typeof FRAGMENT_3106>;
type FragmentSelf3106 = NonNullable<FragmentResult3106>;

export type FragmentToken3106 =
  | FragmentSelf3106["__typename"]
  | FragmentSelf3106["typenameHint"] | FragmentToken3104 | FragmentToken3105;
