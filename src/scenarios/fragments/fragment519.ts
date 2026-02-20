import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken517 } from "./fragment517";
import type { FragmentToken518 } from "./fragment518";

export const FRAGMENT_519 = gql(`
  fragment Fragment519 on Member238 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_238
    memberCount_238
    memberMetric_238
  }
`);

type FragmentResult519 = ResultOf<typeof FRAGMENT_519>;
type FragmentSelf519 = NonNullable<FragmentResult519>;

export type FragmentToken519 =
  | FragmentSelf519["__typename"]
  | FragmentSelf519["typenameHint"] | FragmentToken517 | FragmentToken518;
