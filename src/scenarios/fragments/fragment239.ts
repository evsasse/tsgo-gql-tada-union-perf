import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken237 } from "./fragment237";
import type { FragmentToken238 } from "./fragment238";

export const FRAGMENT_239 = gql(`
  fragment Fragment239 on Member238 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_238
    memberCount_238
    memberMetric_238
  }
`);

type FragmentResult239 = ResultOf<typeof FRAGMENT_239>;
type FragmentSelf239 = NonNullable<FragmentResult239>;

export type FragmentToken239 =
  | FragmentSelf239["__typename"]
  | FragmentSelf239["typenameHint"] | FragmentToken237 | FragmentToken238;
