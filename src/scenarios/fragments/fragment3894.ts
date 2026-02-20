import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3892 } from "./fragment3892";
import type { FragmentToken3893 } from "./fragment3893";

export const FRAGMENT_3894 = gql(`
  fragment Fragment3894 on Member253 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_253
    memberCount_253
    memberMetric_253
  }
`);

type FragmentResult3894 = ResultOf<typeof FRAGMENT_3894>;
type FragmentSelf3894 = NonNullable<FragmentResult3894>;

export type FragmentToken3894 =
  | FragmentSelf3894["__typename"]
  | FragmentSelf3894["typenameHint"] | FragmentToken3892 | FragmentToken3893;
