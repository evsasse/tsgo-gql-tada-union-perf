import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken855 } from "./fragment855";
import type { FragmentToken856 } from "./fragment856";

export const FRAGMENT_857 = gql(`
  fragment Fragment857 on Member16 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_16
    memberCount_16
    memberMetric_16
  }
`);

type FragmentResult857 = ResultOf<typeof FRAGMENT_857>;
type FragmentSelf857 = NonNullable<FragmentResult857>;

export type FragmentToken857 =
  | FragmentSelf857["__typename"]
  | FragmentSelf857["typenameHint"] | FragmentToken855 | FragmentToken856;
