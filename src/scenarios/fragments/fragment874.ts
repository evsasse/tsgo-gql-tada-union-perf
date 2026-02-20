import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken872 } from "./fragment872";
import type { FragmentToken873 } from "./fragment873";

export const FRAGMENT_874 = gql(`
  fragment Fragment874 on Member33 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_33
    memberCount_33
    memberMetric_33
  }
`);

type FragmentResult874 = ResultOf<typeof FRAGMENT_874>;
type FragmentSelf874 = NonNullable<FragmentResult874>;

export type FragmentToken874 =
  | FragmentSelf874["__typename"]
  | FragmentSelf874["typenameHint"] | FragmentToken872 | FragmentToken873;
