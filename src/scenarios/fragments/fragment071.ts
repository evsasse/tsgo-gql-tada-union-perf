import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken069 } from "./fragment069";
import type { FragmentToken070 } from "./fragment070";

export const FRAGMENT_071 = gql(`
  fragment Fragment071 on Member70 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_70
    memberCount_70
    memberMetric_70
  }
`);

type FragmentResult071 = ResultOf<typeof FRAGMENT_071>;
type FragmentSelf071 = NonNullable<FragmentResult071>;

export type FragmentToken071 =
  | FragmentSelf071["__typename"]
  | FragmentSelf071["typenameHint"] | FragmentToken069 | FragmentToken070;
