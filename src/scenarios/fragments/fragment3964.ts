import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3962 } from "./fragment3962";
import type { FragmentToken3963 } from "./fragment3963";

export const FRAGMENT_3964 = gql(`
  fragment Fragment3964 on Member43 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_43
    memberCount_43
    memberMetric_43
  }
`);

type FragmentResult3964 = ResultOf<typeof FRAGMENT_3964>;
type FragmentSelf3964 = NonNullable<FragmentResult3964>;

export type FragmentToken3964 =
  | FragmentSelf3964["__typename"]
  | FragmentSelf3964["typenameHint"] | FragmentToken3962 | FragmentToken3963;
