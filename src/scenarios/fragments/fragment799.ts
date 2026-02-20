import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken797 } from "./fragment797";
import type { FragmentToken798 } from "./fragment798";

export const FRAGMENT_799 = gql(`
  fragment Fragment799 on Member238 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_238
    memberCount_238
    memberMetric_238
  }
`);

type FragmentResult799 = ResultOf<typeof FRAGMENT_799>;
type FragmentSelf799 = NonNullable<FragmentResult799>;

export type FragmentToken799 =
  | FragmentSelf799["__typename"]
  | FragmentSelf799["typenameHint"] | FragmentToken797 | FragmentToken798;
