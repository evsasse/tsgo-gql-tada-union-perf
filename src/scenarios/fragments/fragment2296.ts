import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2294 } from "./fragment2294";
import type { FragmentToken2295 } from "./fragment2295";

export const FRAGMENT_2296 = gql(`
  fragment Fragment2296 on Member55 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_55
    memberCount_55
    memberMetric_55
  }
`);

type FragmentResult2296 = ResultOf<typeof FRAGMENT_2296>;
type FragmentSelf2296 = NonNullable<FragmentResult2296>;

export type FragmentToken2296 =
  | FragmentSelf2296["__typename"]
  | FragmentSelf2296["typenameHint"] | FragmentToken2294 | FragmentToken2295;
