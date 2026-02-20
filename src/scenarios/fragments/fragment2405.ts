import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2403 } from "./fragment2403";
import type { FragmentToken2404 } from "./fragment2404";

export const FRAGMENT_2405 = gql(`
  fragment Fragment2405 on Member164 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_164
    memberCount_164
    memberMetric_164
  }
`);

type FragmentResult2405 = ResultOf<typeof FRAGMENT_2405>;
type FragmentSelf2405 = NonNullable<FragmentResult2405>;

export type FragmentToken2405 =
  | FragmentSelf2405["__typename"]
  | FragmentSelf2405["typenameHint"] | FragmentToken2403 | FragmentToken2404;
