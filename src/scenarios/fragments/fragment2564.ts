import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2562 } from "./fragment2562";
import type { FragmentToken2563 } from "./fragment2563";

export const FRAGMENT_2564 = gql(`
  fragment Fragment2564 on Member43 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_43
    memberCount_43
    memberMetric_43
  }
`);

type FragmentResult2564 = ResultOf<typeof FRAGMENT_2564>;
type FragmentSelf2564 = NonNullable<FragmentResult2564>;

export type FragmentToken2564 =
  | FragmentSelf2564["__typename"]
  | FragmentSelf2564["typenameHint"] | FragmentToken2562 | FragmentToken2563;
