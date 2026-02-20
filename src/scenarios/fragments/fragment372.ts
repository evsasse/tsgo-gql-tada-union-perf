import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken370 } from "./fragment370";
import type { FragmentToken371 } from "./fragment371";

export const FRAGMENT_372 = gql(`
  fragment Fragment372 on Member91 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_91
    memberCount_91
    memberMetric_91
  }
`);

type FragmentResult372 = ResultOf<typeof FRAGMENT_372>;
type FragmentSelf372 = NonNullable<FragmentResult372>;

export type FragmentToken372 =
  | FragmentSelf372["__typename"]
  | FragmentSelf372["typenameHint"] | FragmentToken370 | FragmentToken371;
