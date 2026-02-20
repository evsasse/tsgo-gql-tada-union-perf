import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken812 } from "./fragment812";
import type { FragmentToken813 } from "./fragment813";

export const FRAGMENT_814 = gql(`
  fragment Fragment814 on Member253 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_253
    memberCount_253
    memberMetric_253
  }
`);

type FragmentResult814 = ResultOf<typeof FRAGMENT_814>;
type FragmentSelf814 = NonNullable<FragmentResult814>;

export type FragmentToken814 =
  | FragmentSelf814["__typename"]
  | FragmentSelf814["typenameHint"] | FragmentToken812 | FragmentToken813;
