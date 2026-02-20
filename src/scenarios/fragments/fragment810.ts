import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken808 } from "./fragment808";
import type { FragmentToken809 } from "./fragment809";

export const FRAGMENT_810 = gql(`
  fragment Fragment810 on Member249 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_249
    memberCount_249
    memberMetric_249
  }
`);

type FragmentResult810 = ResultOf<typeof FRAGMENT_810>;
type FragmentSelf810 = NonNullable<FragmentResult810>;

export type FragmentToken810 =
  | FragmentSelf810["__typename"]
  | FragmentSelf810["typenameHint"] | FragmentToken808 | FragmentToken809;
