import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken036 } from "./fragment036";
import type { FragmentToken037 } from "./fragment037";

export const FRAGMENT_038 = gql(`
  fragment Fragment038 on Member37 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_37
    memberCount_37
    memberMetric_37
  }
`);

type FragmentResult038 = ResultOf<typeof FRAGMENT_038>;
type FragmentSelf038 = NonNullable<FragmentResult038>;

export type FragmentToken038 =
  | FragmentSelf038["__typename"]
  | FragmentSelf038["typenameHint"] | FragmentToken036 | FragmentToken037;
