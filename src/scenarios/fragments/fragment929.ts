import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken927 } from "./fragment927";
import type { FragmentToken928 } from "./fragment928";

export const FRAGMENT_929 = gql(`
  fragment Fragment929 on Member88 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_88
    memberCount_88
    memberMetric_88
  }
`);

type FragmentResult929 = ResultOf<typeof FRAGMENT_929>;
type FragmentSelf929 = NonNullable<FragmentResult929>;

export type FragmentToken929 =
  | FragmentSelf929["__typename"]
  | FragmentSelf929["typenameHint"] | FragmentToken927 | FragmentToken928;
